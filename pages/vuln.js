import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount, serverRenderClock } from '../store'
import namor from "namor";

import withRedux from 'next-redux-wrapper';

import { getImageVulnByDigest } from '../actions/images';
import { mapVulnGroups } from '../actions/images/images.selectors';

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

  navigateToUrl(url){
    window.open(url);
  }

  render () {

    const { vulnData, loading, severityOptions } = this.props;

    return (
      <Main>
        <VulnTable vulnData={ vulnData ||[]} severityOptions={severityOptions} navigateToUrl={this.navigateToUrl}/>
      </Main>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getImageVuln: bindActionCreators(getImageVulnByDigest, dispatch)
  }
}

const mapStateToProps = ({ images, ajaxStatus }) => {

  return{
    vulnData: images.vulnData,
    loading: ajaxStatus.loading,
    error: ajaxStatus.error,
    severityOptions: mapVulnGroups(images.vulnData)
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(VulnPage);