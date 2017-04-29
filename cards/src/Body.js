import React from 'react';
import UserDetail from './UserDetail';
import Feed from './Feed';

export default function() {
  return (
    <div className="Body">
        <UserDetail user="Coby" posts="93" followers="582" following="194"/>
        <Feed/>
    </div>
  );
}