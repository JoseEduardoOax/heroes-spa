import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <>
      <h1 className="title text-center">DC Comics</h1>

      <section className="container grid grid--4-cols animation-fade-center">
        <HeroList publisher="DC Comics" />
      </section>

    </>
  )
}
