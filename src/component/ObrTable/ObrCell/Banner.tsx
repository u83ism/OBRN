import React from "react";
import { BaseSiteType } from "../../../entity/Type";

export const Banner = (siteData: BaseSiteType): JSX.Element => {
	return (
		<a href={siteData.URL} target="_blank">
			<img src={siteData.bannerURL} alt={siteData.name} width="200" height="40" />
		</a>
	)
}