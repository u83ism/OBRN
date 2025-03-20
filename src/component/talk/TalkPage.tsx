import { Box, CircularProgress, Container } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import { useParams } from "react-router";
import { TalkData } from "../../entity/Talk";
import { talklog1 } from "../../entity/talklog1";
import { talklog2 } from "../../entity/talklog2";
import { talklog3 } from "../../entity/talklog3";
import { talklog4 } from "../../entity/talklog4";
import { talklog5 } from "../../entity/talklog5";
import { talklog6 } from "../../entity/talklog6";
import { talklog7 } from "../../entity/talklog7";
import { TalkDisplay } from "./TalkDisplay";

export const TalkPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [talkData, setTalkData] = useState<TalkData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 対談IDとデータのマッピング
  const talkDataMap: Record<number, TalkData> = {
    1: talklog1,
    2: talklog2,
    3: talklog3,
    4: talklog4,
    5: talklog5,
    6: talklog6,
    7: talklog7
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      if (!id || isNaN(parseInt(id))) {
        throw new Error("無効な対談IDです");
      }

      const talkId = parseInt(id);
      
      // IDに応じて対応するtalklogを読み込む
      const data = talkDataMap[talkId];
      
      if (!data) {
        throw new Error(`対談ID ${talkId} に対応するデータが見つかりません`);
      }
      
      setTalkData(data);
    } catch (err) {
      console.error("対談データの取得エラー:", err);
      setError(err instanceof Error ? err.message : "不明なエラーが発生しました");
    } finally {
      setLoading(false);
    }
  }, [id, talkDataMap]);

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box marginTop={5} color="error.main">
          エラー: {error}
        </Box>
      </Container>
    );
  }

  if (!talkData) {
    return (
      <Container>
        <Box marginTop={5}>
          対談データが見つかりませんでした
        </Box>
      </Container>
    );
  }

  return <TalkDisplay talkData={talkData} />;
};
