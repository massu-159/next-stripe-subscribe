import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import QuizNew from "@/components/quiz/QuizNew"
import checkSubscription from "@/actions/checkSubscription"
import getCount from "@/actions/getCount"

// 新規クイズ作成ページ
const QuizNewPage = async () => {
  // 認証情報取得
  const session = await getAuthSession()

  if (!session?.user) {
    redirect("/login")
  }

  // サブスク有効期限
  const isSubscription = await checkSubscription({userId: session.user.id})
  // クイズ生成回数
  const count = await getCount({userId: session.user.id})
  return <QuizNew userId={session.user.id} isSubscription={isSubscription} count={count} />
}

export default QuizNewPage