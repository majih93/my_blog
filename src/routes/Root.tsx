import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/layout/DefaultLayout';
import HomePage from '@/pages/HomePage/HomePage';
import Categories from '@/pages/Categories/Categories';
import AboutMe from '@/pages/AboutMe/AboutMe';

export default function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Route>
    </Routes>
  );
}
