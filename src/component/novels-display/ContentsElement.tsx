import React from "react";

export type ContentsElementProps = {
	contents: ReadonlyArray<String>
}

export const ContentsElement = ({ contents }: ContentsElementProps): JSX.Element => {
	return (
		<ul style={{ margin: 0, paddingLeft: '1.5em' }}>
			{contents.map((content, contentIndex) => (
				<li key={contentIndex}>{content}</li>
			))}
		</ul>
	)
}
