// 'app/LogOutBtn.js'
'use client'

import { signOut } from "next-auth/react"

export function LogOutBtn() {
    return (
        <button onClick={()=>{signOut()}} style={{background : 'rosybrown'}}>로그아웃</button>
    )
}