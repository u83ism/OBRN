$(function() {
	showJSON_fromSiteData();

	function showJSON_fromSiteData(){
		const siteDataDOMs = $('.sitedata');
		const siteDataList = [];

		$.each(siteDataDOMs,
			(index,siteDataDOM) => {
				const tableTag = $(siteDataDOM).parents('table');
				const firstTd = $(siteDataDOM).find('td:nth-of-type(1)');
				const aTag = firstTd.find('a');
				const imgTag = firstTd.find('img');

				//サイトデータ
				const siteData = {};
				siteData.nameCategory = tableTag.attr('data-bunrui');
				siteData.URL = aTag.attr('href');
				if(imgTag.length !== 0){
					siteData.bannerURL = imgTag.attr('src');
					siteData.name = imgTag.attr('alt');
				}else{
					siteData.name = aTag.text();
				}
				siteData.administor = firstTd.next().text();
				siteData.comment = firstTd.next().next().text();
				siteData.obrDataList = [];

				//作品データ
				const trTags_obrData = tableTag.find('tr.obrdata');
				$.each(trTags_obrData,
					(index2,obrDataDOM) => {
						const obrData = getOBRdata($(obrDataDOM).find('td'));
						siteData.obrDataList.push(obrData);
					}
				);
				console.log(siteData)
				siteDataList.push(siteData);
			}
		);

		//console.log(JSON.stringify(siteDataList));
	}

	function getOBRdata(tdTags_obrData){
		const obrData = {};

		$.each(tdTags_obrData, 
			(index3,tdDOM) => {
				const tdTag = $(tdDOM)
				const html = tdTag.html();
				const text = tdTag.text();
				let analyzedData;
				let texts;
				switch(index3){
					case 0://作品名
						obrData.name = text;
					break;
					case 1://年度学校名及び生徒人数
						texts = getTexts_fromMultiStagedText(html);
						Object.assign(obrData,getData_fromSecondTdTag(texts));
					break;
					case 2://進行状況
						if(tdTag.hasClass('end')){
							obrData.ends = true;
							obrData.episodeKazu = parseInt(text.replace("完結（全","").replace("話）",""));
						}else{
							if(tdTag.hasClass('stop')){ obrData.suspends = true; }
							texts = getTexts_fromMultiStagedText(html);

							//0=状況,1=進行話数,2=残り人数で、1もしくは1&2が無い可能性がある
							if(texts.length > 2){
								Object.assign(obrData,getData_fromThirdTdTag(texts[1]));
							}
							if(texts.length === 3){
								obrData.remainingNumber = parseInt(texts[2].replace("【残り","").replace("人】",""));
							}
						}
					break;
					case 3://コメント
						obrData.coment = text;
					break;
				}
			}
		);
		return obrData;
	}

	function getTexts_fromMultiStagedText(text){
		return text.split("\n").map(
			text2 => text2.replace("<br>","").replace(/[\x20\t]+/g,"")
		).filter(
			text2 => (text2 !== "")
		);
	}

	function getData_fromSecondTdTag(texts){
		const data = {};
		const schoolData = {};
		const classData = {};

		//最初に年度データ……じゃない時があるので注意！
		for(text of texts){
			if(text.includes("年度") || text.includes("号")){
				//「20XX年度」とか「19??年度」とかがあるのでStringじゃないとダメ
				if(text.includes("号")){
					const dateTexts = text.split("年度");
					data.year = dateTexts[0];
					data.programNumber = parseInt(dateTexts[1].replace("第","").replace("号",""));
				}else{//年度までしかない時
					data.year = text.replace("年度","");
				}
			}else if(text.includes("名")){//基本的に3段目にある人数表記部分を拾う
				const classDataTexts = text.split("\/");
				for(classDataText of classDataTexts){
					//人数はnumberにしたいが、転校生とかが+●名表記になっているので
					if(classDataText.includes("男子")){
						classData.numberOfMan = classDataText.replace("（男子","").replace("名","");
					}else if(classDataText.includes("女子")){
						classData.numberOfWoman = classDataText.replace("女子","").replace("名","");
					}else{
						classData.numberOfStudents = classDataText.replace("計","").replace("名）","")
					}
				}
			}else{//基本的に2段目にある「中学校●年●組」部分を拾いたいが、かなり表記に幅があるのでelseで拾う
				if(text.includes("年")){
					const separatorIndex = text.indexOf("年")-1;//「●年●組」ととりたいので-1
					const schoolNameText = text.slice(0,separatorIndex);
					Object.assign(schoolData,getSchoolName_andAreaCategory(schoolNameText));
					classData.name = text.slice(separatorIndex);
				}else{//学校丸ごととか特殊なカテゴリのケース
					data.targetCategory = text;
				}
			}
		}
		schoolData.class = classData;
		data.school = schoolData;
		return data;
	}

	function getSchoolName_andAreaCategory(text){
			const firstAreaCategoryKeywords = ["都","道","府","県"];
			const secondAreaCategoryKeywords = ["市","町","村"];
			const data = {};

			//住所解析
			if(includesKeyWords_andOption(text,firstAreaCategoryKeywords)){ 
				data.firstAreaCategory = getAreaCategory(text,firstAreaCategoryKeywords);
			}

			const text2 = text.replace(data.firstAreaCategory,"");
			if(includesKeyWords_andOption(text2,secondAreaCategoryKeywords)){
				data.secondAreaCategory = getAreaCategory(text2,secondAreaCategoryKeywords);
			}

			//～市立●●中学校とかの場合はそのままにしておく必要があるので判定。変則パターン多いので注意
			const areaCategoryKeywords = firstAreaCategoryKeywords
			.concat(secondAreaCategoryKeywords)
			.map(keyword => `${keyword}立`)

			const specialKeywords = ["私立","公立","国立"];
			


			if(text.includes("私立")){
				data.name = "私立" + text.split("私立")[1];
			}else if(includesKeyWords(text,areaCategoryKeywords)){
				data.name = text2;
			}else{
				data.name = text;
			}
			return data;
	}

	function includesKeyWords(text,keywords){
		return keywords.some(keyword => text.includes(keyword))
	}

	function includesKeyWords_andOption(text,keywords){//いきなり「市立」で始まる学校対策
		return keywords.some(
			keyword => (text.match(new RegExp('.'+keyword)) !== null)//任意の1文字＋キーワードの存在チェック
		);
	}


	function getAreaCategory(text,categoryNames){
		for(categoryName of categoryNames){
			if(text.includes(categoryName)){ return text.split(categoryName)[0] + categoryName; }
		}
		return null;
	}


	function getData_fromThirdTdTag(text){
		let episodePart;//「現在の話数（合計話数）」の部分
		const data = {};
		if(text.includes("/")){//章は無い作品もある
			const episodePart_andNowChapter = text.split("/");
			data.nowChapter = episodePart_andNowChapter[1];
			episodePart = episodePart_andNowChapter[0];
		}else{
			episodePart = text;
		}

		let nowEpisodePart;
		if(episodePart.includes("（")){//合計話数が無い作品もある
			const nowEpisode_andTotalEpisode = episodePart.split("（");
			data.episodeKazu = parseInt(nowEpisode_andTotalEpisode[1].replace("話)",""));
			nowEpisodePart = nowEpisode_andTotalEpisode[0];
		}else{
			nowEpisodePart = episodePart;
		}
		data.nowEpisode = parseInt(nowEpisodePart.replace("話",""));

		return data;
	}
});

