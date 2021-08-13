import React from "react";
import { TSite } from "../../../entity/Type";

export const VirtualBanner = (siteData: TSite): JSX.Element => {
	return (
		<a href={siteData.URL} target="_blank" className="letter">
			{siteData.name}
		</a>
	)
}