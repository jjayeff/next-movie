import CardList from './CardList'
import {
    TYPE,
    ACTION,
    ADVENTURE,
    ANIMATION,
    BIOGRAPHY,
    COMEDY,
    CRIME,
    DOCUMENTARY,
    DRAMA,
    FAMILY,
    FANTASY,
    FILM_NOIR,
    HISTORY,
    HORROR,
    MUSICAL,
    MYSTERY,
    ROMANCE,
    SCI_FI,
    SPORT,
    THRILLER,
    WAR,
    WESTRN,
    NONE_TYPE
} from '../texts'

const types = [
    ACTION,
    ADVENTURE,
    ANIMATION,
    BIOGRAPHY,
    COMEDY,
    CRIME,
    DOCUMENTARY,
    DRAMA,
    FAMILY,
    FANTASY,
    FILM_NOIR,
    HISTORY,
    HORROR,
    MUSICAL,
    MYSTERY,
    ROMANCE,
    SCI_FI,
    SPORT,
    THRILLER,
    WAR,
    WESTRN,
    NONE_TYPE
]

const Type = () => (
    <CardList data={types} head={TYPE} />
)

export default Type