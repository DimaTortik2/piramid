import { ActionCard } from '@/shared/ActionCard';
import { Button } from '@/shared/Button';

interface MainPageProps {}

export function MainPage({}: MainPageProps) {
  return (
    <div className="flex min-h-full flex-col py-2 w-full max-w-125 gap-2 mx-auto">
      <ActionCard
        title={<>История матчей</>}
        desc={
          <>Статистика по матчам, когда вы использовали дисплей для матча</>
        }
        actions={
          <Button onClick={() => console.log('Смотреть')}>Смотреть</Button>
        }
      />
      <ActionCard
        title={<>История матчей</>}
        desc={
          <>Статистика по матчам, когда вы использовали дисплей для матча</>
        }
        actions={
          <Button onClick={() => console.log('Смотреть')}>Смотреть</Button>
        }
      /><ActionCard
        title={<>История матчей</>}
        desc={
          <>Статистика по матчам, когда вы использовали дисплей для матча</>
        }
        actions={
          <Button onClick={() => console.log('Смотреть')}>Смотреть</Button>
        }
      /><ActionCard
        title={<>История матчей</>}
        desc={
          <>Статистика по матчам, когда вы использовали дисплей для матча</>
        }
        actions={
          <Button onClick={() => console.log('Смотреть')}>Смотреть</Button>
        }
      /><ActionCard
        title={<>История матчей</>}
        desc={
          <>Статистика по матчам, когда вы использовали дисплей для матча</>
        }
        actions={
          <Button onClick={() => console.log('Смотреть')}>Смотреть</Button>
        }
      /><ActionCard
        title={<>История матчей</>}
        desc={
          <>Статистика по матчам, когда вы использовали дисплей для матча</>
        }
        actions={
          <Button onClick={() => console.log('Смотреть')}>Смотреть</Button>
        }
      />
      <ActionCard
        title={<>История матчей</>}
        desc={
          <>Статистика по матчам, когда вы использовали дисплей для матча</>
        }
        actions={
          <Button onClick={() => console.log('Смотреть')}>Смотреть</Button>
        }
        className="mt-auto"
      />
     

    </div>
  );
}
