import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <h1 className="title text-center">Marvel Comics</h1>

      <section className="container grid grid--4-cols animation-fade-center">
        <HeroList publisher="Marvel Comics" />
      </section>
    </>
  )
}
