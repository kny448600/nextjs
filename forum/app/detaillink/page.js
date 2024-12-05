// useRouter 라는 문법 알아보기
// detaillink/page.js

"use client"; //클라이언트 컴포넌트 생성
import { useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <div>
      <button onClick={() => {router.push("/");}}>버튼</button>
      <button onClick={() => {router.forward();}}>앞으로</button>
      <button onClick={() => {router.back();}}>뒤로</button>
      <button onClick={() => {router.refresh();}}>새로고침</button>
      <button onClick={()=>{ router.prefetch('/list') }}>버튼</button> 
    </div>
  );
}
