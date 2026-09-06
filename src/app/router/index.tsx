import { LecturesPage } from '@/pages/LecturesPage';
import { MainPage } from '@/pages/MainPage';
import { RootLayout } from '@/pages/RootLayout';
import { TrainingPage } from '@/pages/TrainingPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <div className="p-10 font-bold text-red-500">
        Ой, страница не найдена 404!
      </div>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'lectures',
        element: <LecturesPage />,
      },
      {
        path: 'training',
        element: <TrainingPage />,
      },
    ],
  },
]);
