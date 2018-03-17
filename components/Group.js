import CardList from './CardList'
import {
    GROUP,
    CARTOON,
    US,
    ASIAN,
    EPISODE,
    LATEST,
    THAI,
} from '../texts'

const groups = [CARTOON,US,ASIAN,EPISODE,LATEST,THAI]

const Group = () => (
    <CardList data={groups} head={GROUP} />
)

export default Group