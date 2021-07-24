import React from "react";
import { TObr } from "../entity/Obr";

export const ObrRow = (obr: TObr): JSX.Element => {
	const school = obr.school
	//"class"を変数名として使えない
	const classData = school.class

	return (
		<tr className="obrdata">
			<td>{obr.name}</td>
			<td>{obr.year}{obr.programNumber}<br />
				{school.prefecture}{school.municipalities}{school.name}{classData.name}<br />
				（男子{classData.numberOfMan}名/女子{classData.numberOfWoman}名/計{classData.numberOfStudents}名）
			</td>
			<td className="new last">進行中<br />
				{obr.newestEpisodeNumber}話/{obr.nowChapterName}<br />
				【残り{obr.remainingNumber}人】
			</td>
			<td>{obr.comment}</td>
		</tr>
	)
}