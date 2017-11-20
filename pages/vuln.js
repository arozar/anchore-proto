import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import namor from "namor";

import withRedux from 'next-redux-wrapper';

import { getImageVulnByDigest } from '../actions/images';
import { mapImages } from '../actions/images/images.selectors';

import Main from '../layouts/main'
import VulnTable from '../components/vulntable'


class VulnPage extends React.Component {
  static async getInitialProps ({ store, isServer, query }) {
    
    return { isServer, id: query.id }
  }

  componentDidMount () {
    this.props.getImageVuln(this.props.id);
  }

  componentWillUnmount () {
  }

  render () {

    const { vulnData, loading, data } = this.props;
    return (
      <Main>
        <VulnTable vulnData={vulnData||[]}/>
      </Main>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
    getImageVuln: bindActionCreators(getImageVulnByDigest, dispatch)
  }
}

const mapStateToProps = ({ images, ajaxStatus }) => {

  return{
    vulnData: mapImages(images.vulnData),
    loading: ajaxStatus.loading,
    error: ajaxStatus.error,
    data: makeData()
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(VulnPage);