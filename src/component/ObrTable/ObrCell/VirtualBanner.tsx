import React from "react";
import { BaseSiteType } from "../../../entity/Type";

export const VirtualBanner = (siteData: BaseSiteType): JSX.Element => {
	return (
		<a href={siteData.URL} target="_blank" className="letter">
			{siteData.name}
		</a>
	)
}