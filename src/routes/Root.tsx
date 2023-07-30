import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout/DefaultLayout';
import HomePage from '@/pages/HomePage/HomePage';

export default function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
