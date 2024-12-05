// 'pages/api/test.js'
// pages/api/ 폴더 안에 만든 파일과 폴더는 
// 자동으로 서버 기능(API) URL이 된다. 

export default function handler(요청,응답) {
    if (요청.method== 'GET') {
        응답.status(200).json({name : 'GET입니다'});
    }
    if (요청.method== 'POST') {
        응답.status(200).json({name: 'POST 입니다'});
    }
}