import React from "react";
import { isNullOrUndefined } from "../../Utility";
import { TObrWithAuthorAndSite } from "../../entity/Type";
import { VirtualBanner } from "./ObrCell/VirtualBanner";
import { Banner } from "./ObrCell/Banner";
import { ProgressInfoCell } from "./ObrCell/ProgressInfoCell";
import { GroupCell } from "./ObrCell/GroupCell";


export const ObrRow = (data: TObrWithAuthorAndSite): JSX.Element => {
	const site = data.site
	const siteElement = isNullOrUndefined(site.bannerURL) ?
		<VirtualBanner {...site} /> :
		<Banner {...site} />
	const disabledClassName = data.canRead ? "" : "disabled"//style.cssで定義

	return (
		<tr className={`obrdata ${disabledClassName}`}>
			<td>{siteElement}</td>
			<td><div className="obrname">{data.name}</div>
				<div>作者：{data.author.name}</div>
			</td>
			<ProgressInfoCell {...data} />
			<td>{data.comment}</td>
			<GroupCell {...data} />
		</tr>
	)
}