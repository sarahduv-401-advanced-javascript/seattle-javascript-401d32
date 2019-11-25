# Class 27

### SASS
- A superset of CSS

### Snapshot Testing
- Using a library to pre-render our react code, and then compare that information with a test renderer.
- Is used for testing the state of your components.

NPM modules to install:
react-scripts rect react-dom enzyme react-test-renderer enzyme-adapter-react-16

### Testing
```js
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../components/counter';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing our Counter component', () => {
  it('Counter changes state on Click', () => {
    let app = mount(<Counter />);
    let button = app.find('button');
    expect(button).toBeDefined();
    expect(app.state('count')).toBe(0);
    button.simulate('click');
    expect(app.state('count')).toBe(1);
  });

  it('render correctly', () => {
    const renderTree = renderer.create(<Counter />).toJSON();
    expect(renderTree).toMatchSnapshot();
  })
});
```

### S3 Deployment
1) Disable permission blocking
  - This should be prompted on bucket creation
2) Go to properties and enable static website hosting
3) Upload files
  - Click next until you see a section about permissions, and make sure they are unblocked.

### Deploying with S3 Buckets
- Go to S3 --> s3.console.aws.amazon.com
- Create a bucket
  - Use US West
  - Do not block public access
- Properties
  - Static website hosting
    - Use this bucket to host a website
    - index document: index.html
    - save
  - upload - check 11:40am

  ### Amplify Deployment
  - Connect to github
  - Select repo and branch
  - Next
  - Save and Deploy