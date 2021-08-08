import React from "react"
import { TSite } from "../entity/Site";
import { isNullOrUndefined } from "../Utility";

const getVirtualBanner = (siteData: TSite): JSX.Element => {
	return (
		<a href={siteData.URL} target="_blank" className="letter">
			{siteData.name}
		</a>
	)
}

const getBanner = (siteData: TSite): JSX.Element => {
	return (
		<a href={siteData.URL} target="_blank">
			<img src={siteData.bannerURL} alt={siteData.name} width="200" height="40" />
		</a>
	)
}

export const SiteRow = (site: TSite): JSX.Element => {
	const nameElement = isNullOrUndefined(site.bannerURL) ? getVirtualBanner(site) : getBanner(site)
	const comment = site.comment ?? ""
	const disabledClassName = site.isOpen ? "" : "disabled"//style.cssで定義


	return (
		<tr className={`sitedata ${disabledClassName}`}>
			<td>
				{nameElement}
			</td>
			<td>{site.administorName}</td>
			<td colSpan={2}>{comment}</td>
		</tr >
	)
}