export default  async function handler(요청,응답) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('Post').find().toArray();
    let time = new Date()

    console.log(time);
    if (요청.method== 'GET') {
        응답.status(200).json({name : 'GET입니다'});
    }
    if (요청.method== 'POST') {
        응답.status(200).json({name: 'POST입니다'});
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="{inter.className}">
                
            </body>
        </html>
    )
}