import React from 'react';
import './editor.scss';
import EditorWithStaticContent from './static-content.js/index.js';

class Content extends React.Component 
render() {
  <>
    <h2>Static Context</h2>
    <EditorWithStaticContent />
  </>
}

export default Content;