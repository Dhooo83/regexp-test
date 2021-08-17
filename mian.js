const str =`
010-1234-5678
wehoo79@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
the quick brown fox junps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
  )