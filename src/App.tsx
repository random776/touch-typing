import { useState, useEffect } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const EffectFunc = () => {
  const array = [
    "しょきびどうけいぞくじかん",
    "きんちゅうならびにくげしょはっと",
    "だんじょきょうどうさんかくしゃかいきほんほう",
    "ぽりえちれんてれふたらーと",
  ];
  const numberArray = [23,26,33,24];
  const keyNumber = 106;
  const [countArray, setCountArray] = useState<number[]>([]);
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const [subtime, setSubtime] = useState(0);
  const [start, setStart] = useState(false);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (array[count] === name) {
      setCountArray([...countArray, subtime])
      setSubtime(0);
      setCount(count + 1);
      setName("");
    }
    if (start === true && count < array.length) {
      const id = setInterval(() => {
        setTime((t) => t + 0.1)
        setSubtime((t) => t + 0.1);
      }, 90); //処理時間の補正により、100を90にした。
      return () => clearInterval(id);
    }
  });
  useEffect(() => {
    console.log(countArray);  // これなら1増えた値が表示される
}, [countArray]);

  return (
    <>
      {start === false && (
        <>
          <h2>簡易タイピングゲーム</h2>
          <Button
            variant="outlined"
            onClick={() => {
              setStart(true);
            }}
          >
            スタート
          </Button>
          <p style={{ margin: 10 }}>
            ＊ 「スタート」ボタンを押すと自動的にゲーム開始となります。
          </p>
          <p style={{ margin: 10 }}>
            ＊ このサイトの制作者「かっちゃん」へのお問い合わせは
            <a
              href="https://random776.github.io/kacchan-uts2-22/contact.html"
              className="btn4"
            >
              こちら
            </a>
            から。
          </p>
          <p style={{ margin: 10 }}>
            ＊
            制作者が「タイピングゲームってこんなもんじゃね？」というノリで作った試作品なので、バグがあるかもしれません。
          </p>
          <p style={{ margin: 10 }}>＊ パソコン環境での実行を推奨しております。</p>
        </>
      )}
      {count < array.length && start === true && (
        <>
          <h2>簡易タイピングゲーム</h2>
          <div className={"time"}>
            {count + 1}/{array.length}問目
          </div>
          <div className={"time"}>時間: {Math.floor(time * 10) / 10}</div>
          <p>{`問題:${array[count]}`}</p>
          <p>{`入力:${name}`}</p>
          <form noValidate autoComplete="off">
            <Input
              autoFocus
              placeholder="入力"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </form>
        </>
      )}
      
      {count >= array.length && start === true && (
        <>
          <h2>簡易タイピングゲーム</h2>
          <p>あなたの記録は、 {Math.floor(time * 10) / 10} 秒です。</p>
          <p>1秒あたりの打鍵は {Math.floor((keyNumber / time) * 10) / 10} 回です。</p>
          {visible === false && 
          <div className="button">
          <Button
            variant="outlined"
            onClick={() => {
              setVisible(true);
            }}
          >
            結果の詳細を表示
          </Button>
          </div>
          }
          {visible === true && 
          <div className="button">
          <Button
            variant="outlined"
            onClick={() => {
              setVisible(false);
            }}
          >
            結果の詳細を非表示
          </Button>
          </div>
          }
          {visible === true &&
          <table key={"table"} className={"table"}>
          <thead>
            <th>問題</th>
            <th>かかった時間</th>
            <th>1秒あたりの打鍵</th>
          </thead>
          <tbody>
            {countArray.map((content,i) => (
              <tr>
                <td key={`変数${content}`}>{array[i]}</td>
                <td key={`中身${content}`}>{Math.floor(content * 10) / 10} s</td>
                <td key={`速度${content}`}>{Math.floor((numberArray[i]/content) * 10) / 10} 回</td>
              </tr>
            ))}
          </tbody>
        </table>
          }
          <div className="button">
          <Button
            variant="outlined"
            onClick={() => {
              setStart(false);
              setCount(0);
              setTime(0);
              setName("");
              setSubtime(0);
              countArray.splice(0);
            }}
          >
            やり直す
          </Button>
          </div>
          
          <p style={{ margin: 10 }}>
            ＊
            このツールがいいと思ったら、ぜひともいいねとRTをお願いいたします！
          </p>
          <p style={{ margin: 10 }}>
            ＊ この画面をスクショして、みんなで共有しましょう！
          </p>
          <p style={{ margin: 10 }}>
            ＊ このサイトの制作者「かっちゃん」へのお問い合わせは
            <a
              href="https://random776.github.io/kacchan-uts2-22/contact.html"
              className="btn4"
            >
              こちら
            </a>
            から。
          </p>
        </>
      )}
    </>
  );
};

export default EffectFunc;
