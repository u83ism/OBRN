import { Box, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
export const InformationPage = (): JSX.Element => {
	return (
		<Container>
			<Box marginTop={5}>
				<Paper>
					<Box p={3}>
						<Typography variant="h3" component="h1" gutterBottom>インフォメーション</Typography>
						<Typography variant="h4" component="h2" gutterBottom>1.OBRNとは？</Typography>
						<Typography paragraph>小説「BATTLE ROYALE」（高見広春/太田出版＆幻冬舎）の1.5次創作小説ジャンル、「オリジナルバトルロワイアル」を掲載しているサイト（＝オリバトサイト）の専門リンク集兼データベースです。</Typography>

						<Typography variant="h4" component="h2" gutterBottom>2.OBRNに登録するための条件</Typography>
						<Typography paragraph>OBRNに登録するためには以下の条件を満たす必要があります。</Typography>
						<Typography variant="h5" component="h3" gutterBottom>2-1.オリバトを連載していること</Typography>
						<Typography paragraph>
							ちなみにオリバトの定義ですが、基本的に「登場人物がオリジナルで、プログラムを中心に描いた小説」という感じです。最終判断は私がしますが、もしオリバトでないと判断した場合、登録を拒否させていただく場合があります。
						</Typography>
						<Typography variant="h5" component="h3" gutterBottom>2-2.オリバトは申し込み時点で既にある程度の量を連載していて下さい</Typography>
						<Typography paragraph>
							「これから連載します」や「最近連載開始しました」というようなサイトは登録拒否させていただく場合があります。
						</Typography>
						<Typography variant="h5" component="h3" gutterBottom>2-3.またあまりにも閲覧に問題があったりする場合なども拒否させていただく場合があります</Typography>
						<Typography paragraph>
							以上のように登録については状況を見て、総合的に判断するつもりです。<br />
							なお一度拒否されても、登録条件を満たして再度申し込んでいただければ審査させていただきます。
						</Typography>
						<Typography variant="h4" component="h2" gutterBottom>3.新規登録手続き</Typography>
						<Typography paragraph>OBRNへの登録は以下の流れとなります。</Typography>
						<Typography variant="h5" component="h3" gutterBottom>
							3-1.<a href="mailto:u83ism@gmail.com">メール</a>
							もしくは <a href="https://x.com/u83unlimited">Xの私のアカウント宛にリプなりDMなりでコンタクト</a>
							で以下の項目をお知らせ下さい。
						</Typography>
						<Box m={5}>
							<TableContainer component={Paper}>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell align="center" colSpan={2}>必須項目</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>掲載サイトURL</TableCell>
											<TableCell>https://～～～～</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>著者名</TableCell>
											<TableCell>○○○○</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>作品名</TableCell>
											<TableCell>○○○○○○</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="center" colSpan={2}>追加可能項目（一部のみも可能）</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<Stack direction="row" alignItems="center" gap={1}>
													<Typography>プログラム実施年度・号数</Typography>
													<Tooltip
														arrow
														placement="top"
														title="号数のみ省略、年度のみ省略も可能。">
														<InfoIcon fontSize="small" />
													</Tooltip>
												</Stack>
											</TableCell>
											<TableCell>○○○○年度○○号</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<Stack direction="row" alignItems="center" gap={1}>
													<Typography>対象クラス詳細</Typography>
													<Tooltip
														arrow
														placement="top"
														title="表記はかなり自由に変更してもらって構いません。">
														<InfoIcon fontSize="small" />
													</Tooltip>
												</Stack>
											</TableCell>
											<TableCell>○○県立○○市立○○中学校○年○組</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<Stack direction="row" alignItems="center" gap={1}>
													<Typography>参加人数</Typography>
													<Tooltip
														arrow
														placement="top"
														title="もし参加名簿に入っていない人物が参戦する場合は＋○表記とします。（例：転校生として男子1名が追加参戦→男子○＋１名/女子○名/計○＋１名）">
														<InfoIcon fontSize="small" />
													</Tooltip>
												</Stack>
											</TableCell>
											<TableCell>（男子○名/女子○名/計○名）</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<Stack direction="row" alignItems="center" gap={1}>
													<Typography>進行状況</Typography>
													<Tooltip
														arrow
														placement="top"
														title="残り人数は表記無しや、（シナリオの都合上必要と認められる場合）偽りの表記にすることも可能です。なお完結作品の場合は、「完結（全○○話）」として下さい。さらに○盤戦の所は省略・変更可能です。後ろの方の「計○○話」は章ごとに話数リセットしてる方向けなので、これも省略可能です。">
														<InfoIcon fontSize="small" />
													</Tooltip>
												</Stack>
											</TableCell>
											<TableCell>○○話（計○○話）/○盤戦 【残り○人】</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
						<Typography variant="h5" component="h3" gutterBottom>3-2.管理人が作品を審査させていただきます。</Typography>
						<Typography paragraph>
							問題がなければ登録されます。登録後最初の更新時にリストに掲載されます。
						</Typography>
					</Box>
				</Paper>
			</Box >
		</Container >
	)
}