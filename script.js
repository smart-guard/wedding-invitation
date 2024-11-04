* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    font-family: 'Nanum Myeongjo', serif;
    background-color: #f9f9f9;
}

#wrap {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.templatearea {
    position: relative;
    text-align: center;
    margin-bottom: 40px;
}

/* 첫 번째 영역 (area1) 스타일 */
#area1 {
    background-color: #fff;
    padding: 20px;
}

#area1 .img {
    width: 100%;
    max-width: 800px;
    height: auto;
}

.text-container {
    position: relative;
    color: #C68F69;
}

.text-container .text {
    font-size: 55px;
    font-weight: bold;
    line-height: 1.4em;
    letter-spacing: 0.24em;
}

.text-container .ampersand {
    margin: 10px auto;
}

.text-container .ampersand img {
    width: 50px;
    height: auto;
}

.text-container .date,
.text-container .location {
    font-size: 35px;
    font-weight: bold;
    line-height: 1.4em;
    color: #C68F69;
    margin-top: 20px;
}

/* 두 번째 영역 (area2) 스타일 */
#area2 {
    background-color: #fff;
    padding: 20px;
}

#area2 .img {
    width: 100%;
    max-width: 800px;
    height: auto;
}

.message-container {
    margin: 30px 0;
    padding: 0 20px;
    text-align: center;
}

.message {
    font-size: 34px;
    color: #333333;
    line-height: 1.5em;
    letter-spacing: 0em;
}


/* 모바일 전용 스타일 */
@media (max-width: 600px) {
    #wrap {
        padding: 10px;
    }

    .templatearea, #area1, #area2 {
        padding: 10px;
    }

    .text-container .text, #area1 .text, #area2 .text {
        font-size: 30px;
        line-height: 1.2em;
    }

    .text-container .date, .text-container .location {
        font-size: 20px;
    }

    .message {
        font-size: 20px;
        line-height: 1.3em;
    }

    .img {
        max-width: 100%;
    }
}