import { ActionCard } from '@/shared/ActionCard';
import { Button } from '@/shared/Button';
import { Circle } from '@/shared/Circle';
import { InfoDrawer } from '@/shared/InfoDrawer';
import { QuestionMarkIcon } from '@phosphor-icons/react';

interface MainPageProps {}

export function MainPage({}: MainPageProps) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-125 flex-col gap-2 py-2">
      <ActionCard
        title={<>История матчей</>}
        desc={
          <>Статистика по матчам, когда вы использовали дисплей для матча</>
        }
        actions={
          <Button onClick={() => console.log('Смотреть')}>Смотреть</Button>
        }
        headerAddon={
          <button onClick={() => console.log('Сыграно столько матчей')}>
            <Circle>5</Circle>
          </button>
        } // Сделаю тост
      />
      <ActionCard
        title={<>Дисплей для матча</>}
        desc={<>Вы можете сыграть с другом, а мы будем вам помогать</>}
        actions={<Button onClick={() => console.log('Играть')}>Играть</Button>}
        headerAddon={
          <InfoDrawer
            content={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique fugiat architecto unde beatae libero iusto minima
                delectus! Voluptate consectetur incidunt consequuntur repellat
                magni sunt earum magnam illo provident tenetur deserunt dolore
                eligendi facere maiores repellendus rem, accusantium minus
                possimus, numquam accusamus praesentium sapiente perspiciatis
                fugit! Pariatur, exercitationem eius iure culpa fuga omnis
                totam! Neque, incidunt illum quia velit rem illo ipsa quod
                dolorum provident eveniet modi dignissimos corrupti harum eaque
                dolore distinctio officiis? Laborum, nemo omnis, animi ullam
                totam molestias a perspiciatis impedit saepe neque sequi esse
                provident temporibus quia ea quasi iusto vitae fugit eveniet
                debitis voluptates vero quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique fugiat architecto unde
                beatae libero iusto minima delectus! Voluptate consectetur
                incidunt consequuntur repellat magni sunt earum magnam illo
                provident tenetur deserunt dolore eligendi facere maiores
                repellendus rem, accusantium minus possimus, numquam accusamus
                praesentium sapiente perspiciatis fugit! Pariatur,
                exercitationem eius iure culpa fuga omnis totam! Neque, incidunt
                illum quia velit rem illo ipsa quod dolorum provident eveniet
                modi dignissimos corrupti harum eaque dolore distinctio
                officiis? Laborum, nemo omnis, animi ullam totam molestias a
                perspiciatis impedit saepe neque sequi esse provident temporibus
                quia ea quasi iusto vitae fugit eveniet debitis voluptates vero
                quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique fugiat architecto unde beatae libero iusto minima
                delectus! Voluptate consectetur incidunt consequuntur repellat
                magni sunt earum magnam illo provident tenetur deserunt dolore
                eligendi facere maiores repellendus rem, accusantium minus
                possimus, numquam accusamus praesentium sapiente perspiciatis
                fugit! Pariatur, exercitationem eius iure culpa fuga omnis
                totam! Neque, incidunt illum quia velit rem illo ipsa quod
                dolorum provident eveniet modi dignissimos corrupti harum eaque
                dolore distinctio officiis? Laborum, nemo omnis, animi ullam
                totam molestias a perspiciatis impedit saepe neque sequi esse
                provident temporibus quia ea quasi iusto vitae fugit eveniet
                debitis voluptates vero quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique fugiat architecto unde
                beatae libero iusto minima delectus! Voluptate consectetur
                incidunt consequuntur repellat magni sunt earum magnam illo
                provident tenetur deserunt dolore eligendi facere maiores
                repellendus rem, accusantium minus possimus, numquam accusamus
                praesentium sapiente perspiciatis fugit! Pariatur,
                exercitationem eius iure culpa fuga omnis totam! Neque, incidunt
                illum quia velit rem illo ipsa quod dolorum provident eveniet
                modi dignissimos corrupti harum eaque dolore distinctio
                officiis? Laborum, nemo omnis, animi ullam totam molestias a
                perspiciatis impedit saepe neque sequi esse provident temporibus
                quia ea quasi iusto vitae fugit eveniet debitis voluptates vero
                quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique fugiat architecto unde beatae libero iusto minima
                delectus! Voluptate consectetur incidunt consequuntur repellat
                magni sunt earum magnam illo provident tenetur deserunt dolore
                eligendi facere maiores repellendus rem, accusantium minus
                possimus, numquam accusamus praesentium sapiente perspiciatis
                fugit! Pariatur, exercitationem eius iure culpa fuga omnis
                totam! Neque, incidunt illum quia velit rem illo ipsa quod
                dolorum provident eveniet modi dignissimos corrupti harum eaque
                dolore distinctio officiis? Laborum, nemo omnis, animi ullam
                totam molestias a perspiciatis impedit saepe neque sequi esse
                provident temporibus quia ea quasi iusto vitae fugit eveniet
                debitis voluptates vero quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique fugiat architecto unde
                beatae libero iusto minima delectus! Voluptate consectetur
                incidunt consequuntur repellat magni sunt earum magnam illo
                provident tenetur deserunt dolore eligendi facere maiores
                repellendus rem, accusantium minus possimus, numquam accusamus
                praesentium sapiente perspiciatis fugit! Pariatur,
                exercitationem eius iure culpa fuga omnis totam! Neque, incidunt
                illum quia velit rem illo ipsa quod dolorum provident eveniet
                modi dignissimos corrupti harum eaque dolore distinctio
                officiis? Laborum, nemo omnis, animi ullam totam molestias a
                perspiciatis impedit saepe neque sequi esse provident temporibus
                quia ea quasi iusto vitae fugit eveniet debitis voluptates vero
                quod.
              </>
            }
            trigger={
              <button>
                <Circle>
                  <QuestionMarkIcon />
                </Circle>
              </button>
            }
          />
        }
      />
    </div>
  );
}
