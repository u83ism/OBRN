import React, { useState } from "react"
import ReactDOM from "react-dom";
import { TitleLogo } from "./component/TitleLogo";
import { HelloText } from "./component/HelloText";
import { InformationTable } from "./component/InformationTable";

import { TObrWithAuthorAndSite, } from "./entity/Type"
import { getObrWithAuthorAndSite } from "./entity/Analyzer";
import { obrList } from "./entity/ObrList";
import { sites } from "./entity/Sites";
import { authors } from "./entity/Authors";
import { ObrTable } from "./component/ObrTable";
import { ControlPanel } from "./component/ControlPanel";

//サイトデータと作者データを結合してアクティブな奴だけ抽出
const activeObrList = getObrWithAuthorAndSite(obrList, sites, authors)
	.filter((data: TObrWithAuthorAndSite) => data.canRead)

const App = (): JSX.Element => {
	const [count, setCount] = useState(0);

	return (
		<div>
			hookテスト:{count}
			<TitleLogo />
			<HelloText />
			<InformationTable />
			<ControlPanel />
			<ObrTable {...{ list: activeObrList }} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"));