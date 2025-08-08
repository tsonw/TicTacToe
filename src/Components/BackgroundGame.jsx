import React, { useState, useEffect } from "react";

import Xicon from "../assets/x.png";
import Oicon from "../assets/o.png";
import drawIcon from "../assets/draw.png";

import "../styles/BackgroundGame.css";

export default function BackgroundGame () {
    
    // Set title
    document.title = "Tic Tac Toe";

    // GamePlay
    const [gamePlay, setGamePlay] = useState(Array(9).fill(""));

    // History Click
    const [history, setHistory] = useState(Array(9).fill(1));

    // Biến để xem lượt của người chơi 
    const [turn, setTurn] = useState(1)

    // Biến để lưu số lần bấm
    const [count, setCount] = useState(9);

    // Biến để lưu số điểm sau mỗi ván của cả hai người chơi
    const [Xscore, setXscore] = useState(0);
    const [Oscore, setOscore] = useState(0);

    // Biến lưu người chiên thắng để hiển thị thông báo
    const [winner, setWinner] = useState();

    // List Assets Icon Game
    const ListAssetsIcon = {
        0 : Xicon,
        1 : Oicon,
        2 : drawIcon
    }

    // Hàm để kiểm tra kết quả của trận đấu
    const gameResulCheck = (dataGame, i) => {

        // Kiểm tra hàng ngang trên cùng
        const rowCheckValueTop = dataGame[0] != "" && dataGame[1] != "" && dataGame[2] != "";
        const rowCheckWinnerTop = dataGame[0] == dataGame[1] && dataGame[1] == dataGame[2];
        if (rowCheckValueTop && rowCheckWinnerTop) {
            // Check winner person
            setWinner(dataGame[0]);
            WinnerDisplay(dataGame[0]);
            calculScore(dataGame[i]);
            return
        }

        // Kiểm tra hàng ngang ở giữa
        const rowCheckValueMid = dataGame[3] != "" && dataGame[4] != "" && dataGame[5] != "";
        const rowCheckWinnerMid = dataGame[3] == dataGame[4] && dataGame[4] == dataGame[5];
        if (rowCheckValueMid && rowCheckWinnerMid) {
            // Check winner person
            setWinner(dataGame[3]);
            WinnerDisplay(dataGame[3]);
            calculScore(dataGame[i]);
            return
        }

        // Kiểm tra hàng ngang dưới cùng
        const rowCheckValueBot = dataGame[6] != "" && dataGame[7] != "" && dataGame[8] != "";
        const rowCheckWinnerBot = dataGame[6] == dataGame[7] && dataGame[7] == dataGame[8];
        if (rowCheckValueBot && rowCheckWinnerBot) {
            // Check winner person
            setWinner(dataGame[6]);
            WinnerDisplay(dataGame[6]);
            calculScore(dataGame[i]);
            return
        }

        // Kiểm tra hàng dọc bên trái
        const rowCheckValueLeft = dataGame[0] != "" && dataGame[3] != "" && dataGame[6] != "";
        const rowCheckWinnerLeft = dataGame[0] == dataGame[3] && dataGame[3] == dataGame[6];
        if (rowCheckValueLeft && rowCheckWinnerLeft) {
            // Check winner person
            setWinner(dataGame[0]);
            WinnerDisplay(dataGame[0]);
            calculScore(dataGame[i]);
            return
        }

        // Kiểm tra hàng dọc ở giữa
        const rowCheckValueMidCol = dataGame[1] != "" && dataGame[4] != "" && dataGame[7] != "";
        const rowCheckWinnerMidCol = dataGame[1] == dataGame[4] && dataGame[4] == dataGame[7];
        if (rowCheckValueMidCol && rowCheckWinnerMidCol) {
            // Check winner person
            setWinner(dataGame[1]);
            WinnerDisplay(dataGame[1]);
            calculScore(dataGame[i]);
            return
        }

        // Kiểm tra hàng dọc bên phải
        const rowCheckValueRight = dataGame[2] != "" && dataGame[5] != "" && dataGame[8] != "";
        const rowCheckWinnerRight = dataGame[2] == dataGame[5] && dataGame[5] == dataGame[8];
        if (rowCheckValueRight && rowCheckWinnerRight) {
            // Check winner person
            setWinner(dataGame[2]);
            WinnerDisplay(dataGame[2]);
            calculScore(dataGame[i]);
            return
        }

        // Kiểm tra hàng chéo trái phải
        const rowCheckValueLeftRight = dataGame[0] != "" && dataGame[4] != "" && dataGame[8] != "";
        const rowCheckWinnerLeftRight = dataGame[0] == dataGame[4] && dataGame[4] == dataGame[8];
        if (rowCheckValueLeftRight && rowCheckWinnerLeftRight) {
            // Check winner person
            setWinner(dataGame[0]);
            WinnerDisplay(dataGame[0]);
            calculScore(dataGame[i]);
            return
        }

        // Kiểm tra hàng chéo phải trái
        const rowCheckValueRightLeft = dataGame[2] != "" && dataGame[4] != "" && dataGame[6] != "";
        const rowCheckWinnerRightLeft = dataGame[2] == dataGame[4] && dataGame[4] == dataGame[6];
        if (rowCheckValueRightLeft && rowCheckWinnerRightLeft) {
            // Check winner person
            setWinner(dataGame[2]);
            WinnerDisplay(dataGame[2]);
            calculScore(dataGame[i]);
            return
        }

        if (count == 1) {
            WinnerDisplay(2);
        }
    };


    // Hàm hiển thị thông báo chiến thắng
    const WinnerDisplay = (person) => {
        // Hiển thị thông báo chiến thắng
        const message = document.getElementById("winner-message");
        const title = document.getElementById("message-winner-text");
        message.querySelector("img").src = ListAssetsIcon[person];
        message.style.display = "flex";

        if (person == 2) {
            title.textContent = "Draw";
        } else {
            title.textContent = "Winner";
        }
    };

    // Hàm tính điểm
    const calculScore = (person) => {
        if (person == 1) {
            setOscore((prev) => prev + 1);
        } else if (person == 0) {
            setXscore((prev) => prev + 1);
        }
    };

    // Hàm reset game
    const gameReset = () => {
        
        // Hiển thị thông báo khi vẫn còn lượt đi
        if (count > 0) {
            if (!(window.confirm("You still have moves left. Want to keep playing? 🎮"))) {
                setCount(9);
                setTurn(1);
                setGamePlay(Array(9).fill(""));
                setHistory(Array(9).fill(1));
            } 
        } else {
            setCount(9);
            setTurn(1);
            setGamePlay(Array(9).fill(""));
            setHistory(Array(9).fill(1));
        }
    };

    // Hàm xử lý sự kiện khi bấm vào block game
    const handleClick = (i) => {

        if (history[i] == 0) return; 
        
        // Tạo một array mới để phát hiện sự thay đổi
        const gamePlayAfterClick = [...gamePlay];
        const noteHistory = [...history];

        // Thay đổi giá trị trong ô tương ứng
        gamePlayAfterClick[i] = `${turn}`;
        noteHistory[i] = 0;

        // Thay đổi trong GamePlay giá trị đã được thay đổi
        setGamePlay(gamePlayAfterClick);
        setHistory(noteHistory);

        // Thay đổi lượt (UI Asset Icon)
        if (turn % 2 == 0) {
            setTurn(1);
        } else {
            setTurn(0);
        }

        // Tính số lượt còn lại
        setCount((prev) => prev - 1);

        gameResulCheck(gamePlayAfterClick, i);
    };

    // Xử lý sự kiện của nút reset
    const handleClickReset = () => {
        gameReset();
    };

    // Xử lý sự kiện của nút new game
    const handleClickNewGame = () => {
        
        if (window.confirm("Are you sure you wanna start a new game?")) {
            setCount(9);
            setTurn(1);
            setGamePlay(Array(9).fill(""));
            setHistory(Array(9).fill(1));
    
            setXscore(0);
            setOscore(0);
        }
        
    };

    // Xử lý sự kiện của nút continue
    const handleClickContinue = () => {
        setCount(9);
        setTurn(1);
        setGamePlay(Array(9).fill(""));
        setHistory(Array(9).fill(1));

        // Tắt thông báo winner
        const message = document.getElementById("winner-message");
        message.style.display = "none";
    };

    useEffect(() => {

        const xTurn = document.getElementById("effect-turn-X-display");
        const oTurn = document.getElementById("effect-turn-O-display");

        if (turn == 1) {
            xTurn.style.display = "none";
            oTurn.style.display = "block";
        } else {
            xTurn.style.display = "block";
            oTurn.style.display = "none";
        }

    },[turn]);

    return (
        <>
            <div className="main-game-play">
                <div className="score-board">
                    <img src={Xicon} alt="X Icon" draggable="false" />
                    <h1>{Xscore}</h1>
                </div>
                <div className="game-center">
                    <h1 id="title-game-center">{`Remaining moves: ${count}`}</h1>
                    <div className="game-play">
                        {gamePlay.map((item, i) => (
                            <button key={i} id={`block-${i}`} onClick={() => handleClick(i)}>
                                {item && (<img className="img-icon-asset" src={ListAssetsIcon[item]} alt="icon" draggable="false" />)}
                            </button>
                        ))}
                    </div>
                    <div className="panel-btn-function">
                        <button onClick={handleClickNewGame}>New Game</button>
                        <button onClick={handleClickReset}>Reset</button>
                    </div>
                </div>
                <div className="score-board">
                    <img src={Oicon} alt="X Icon" draggable="false" />
                    <h1>{Oscore}</h1>
                </div>
                <div className="win-message" id="winner-message">
                    <img src={drawIcon} alt="icon-Winner" draggable="false" />
                    <h2 id="message-winner-text">Winner</h2>
                    <button onClick={handleClickContinue}>Continue</button>
                </div>

                <div id="effect-turn-O-display" className="effect-turn-O"></div>
                <div id="effect-turn-X-display" className="effect-turn-X"></div>
            </div>
        </>
    );
}