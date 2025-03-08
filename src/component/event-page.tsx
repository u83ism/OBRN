import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { JSX } from 'react/jsx-runtime';

export const EventPage = (): JSX.Element => {
	return (
		<Container>
			<Box marginTop={5}>
				<Paper>
					<Box p={3}>
						<Typography variant="h3" component="h1" gutterBottom>企画</Typography>

						<Typography variant="h4" component="h2" gutterBottom>オリバト作者対談</Typography>
						<Typography paragraph>特別企画のオリバト作者対談です。ゲストとして招待した作者さんとオリバトについて語ります。</Typography>

						<TableContainer component={Paper} sx={{ mt: 2 }}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>回数・対談タイトル</TableCell>
										<TableCell>対談相手</TableCell>
										<TableCell>日時</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell><a href="talk1.html">第1回「感情描写を重視したオリバトを」</a></TableCell>
										<TableCell>若丸進二<br />（「毒人間の館」管理人）</TableCell>
										<TableCell>2003年9月4日</TableCell>
									</TableRow>
									<TableRow>
										<TableCell><a href="talk2.html">第2回「丁寧さが光る巧の技」</a></TableCell>
										<TableCell>桜城聖耶<br />（「東亜的英雄伝」管理人）</TableCell>
										<TableCell>2003年9月27日</TableCell>
									</TableRow>
									<TableRow>
										<TableCell><a href="talk3.html">第3回「うれしい！楽しい！大好き！」</a></TableCell>
										<TableCell>松風美奈子<br />（「若紫文庫」管理人）</TableCell>
										<TableCell>2004年1月17日</TableCell>
									</TableRow>
									<TableRow>
										<TableCell><a href="talk4.html">第4回「蘇える遺言と素晴らしきアイデア」</a></TableCell>
										<TableCell>みかど<br />（「Last Message」管理人）</TableCell>
										<TableCell>2004年1月31日</TableCell>
									</TableRow>
									<TableRow>
										<TableCell><a href="talk5.html">第5回「大きな分岐点」</a></TableCell>
										<TableCell>ルコラ<br />（「another program channel」管理人）</TableCell>
										<TableCell>2004年6月6日</TableCell>
									</TableRow>
									<TableRow>
										<TableCell><a href="talk6.html">第6回「We are "ZERO"」</a></TableCell>
										<TableCell>
											藤堂尚也<br />
											（「ZERO in バトルロワイアル」管理人）<br />
											Keith・赤狼達彦<br />
											（共同製作者）
										</TableCell>
										<TableCell>2005年9月2日</TableCell>
									</TableRow>
									<TableRow>
										<TableCell><a href="talk7.html">第7回「真剣20代しゃべり場」</a></TableCell>
										<TableCell>
											めのう<br />
											（「明鏡氷河」管理人）
										</TableCell>
										<TableCell>2008年8月6日</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>

						<Box my={4}>
							<Divider />
						</Box>

						<Typography variant="h4" component="h2" gutterBottom>OBRNチャット</Typography>
						<Typography paragraph>
							OBRNチャットは、それまで「バーチャルオリバトアイドルみほ15歳」で何回か行われており、半ばオリバト作者サロン化していた「みほチャット」をうちでもやろうと思い、2002年12月末に突発的に始まった企画です。源流は草加3-3のバトルチャットになるんかしら……<br />
							やり始めたのは突発ながらも定例会にしようと思ったので、その後も年に3～4回ほど開催し続け現在に至ります。<br />
							現在は管理人含め社会人の方が増えたため、開催時期、回数共にかなり流動的です。大型連休中に組むことが多いかも。<br />
							中味はただ単にオリバト関係者で話をしようということで適当に話してます。夜10時頃から始まり、朝3時～4時ぐらいまで喋ってます。<br />
							マナーについてはあまり……とやかく言いません。が、その場の管理人の判断により嗜めたり注意することがありますので、指示に従っていただければ幸いです。<br />
							これは強制ではありませんが、できれば<b>サイト持ちの方は「名前＠サイト名（略称）」</b>で御願いします。何処の方か一目で分かった方が喋りやすいので。<br />
							……とまぁこんな感じで、徐々にペース落としながらも2013年までに計32回開催しましたが、近年は人集まるかどうか怪しい感じなので自然消滅状態です。
						</Typography>

					</Box>
				</Paper>
			</Box>
		</Container>
	)
}

const Divider = () => {
	return (
		<Box
			sx={{
				height: '1px',
				width: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.12)'
			}}
		/>
	);
};
