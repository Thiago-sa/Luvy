import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={style.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/69646363?s=460&u=d2d9a808c10520c556b830c26e09a97f1f5a0b2d&v=4" alt="Thiago Santos" />
      <div>
        <strong>Thiago Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Lvel" />
          Level {level}
        </p>
      </div>
    </div>
  );
}