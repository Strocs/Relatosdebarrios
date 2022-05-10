import { TeamList } from "./TeamList"
import '../../styles/proyecto/Team.css'

export const Team = ({name, teamList}) => {

  return (
    <div className={`team__container`}>
      <h2 className={`team__title`}>
        {name}
        {console.log(teamList[0])}
      </h2>
      <div className={`team__list`}>
        {teamList.map(ppl => <TeamList data={ppl}/>)}
      </div>
    </div>
  )
}
