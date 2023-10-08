import Header from '@/components/header'
import styles from "./home.module.scss";
import Welcome from '@/components/welcome';
import Timeline from '@/components/timeline';
import Cases from "@/components/cases"
export default function Home() {
  return (
    <main className={styles.container} >
      <Header/>
      <Welcome/>
      <Timeline/>
      <Cases/>
    </main>
  )
}
