import React, { Suspense } from 'react';
const CourseLazy = React.lazy(() => import('./Course'));

const CourseWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CourseLazy />
        </Suspense>
    );
};

export default CourseWrapper;
