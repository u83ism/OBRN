import { useRouteError, isRouteErrorResponse } from "react-router";
import { JSX } from 'react/jsx-runtime';

export const ErrorPage = (): JSX.Element => {
	const error = useRouteError();
	console.error(error);

	let text = null;
	if (isRouteErrorResponse(error)) {
		text = `${error.status} : ${error.statusText} `
	} else {
		text = `不明なエラーです`
	}
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{text}</i>
			</p>
		</div>
	);
}
