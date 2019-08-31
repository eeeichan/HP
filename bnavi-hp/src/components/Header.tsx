import * as React from 'react';
import Button from '@material-ui/core/Button';


class Header extends React.Component {
  public render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Header1
        </Button>
      </div>
    )
  }
}

export default Header;
