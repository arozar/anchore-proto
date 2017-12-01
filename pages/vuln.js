import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import namor from "namor";

import withRedux from 'next-redux-wrapper';

import { getImageVulnByDigest, getImages } from '../actions/images';
import { mapVulnGroups, mapImages } from '../actions/images/images.selectors';

import Main from '../layouts/main'
import VulnTable from '../components/vulntable'


class VulnPage extends React.Component {
  
  static async getInitialProps ({ store, isServer, query }) {
    
    return { isServer, id: decodeURIComponent(query.id) }
  }

  componentDidMount () {
    this.props.getImageVuln(this.props.id);

    if(this.props.images.length === 0){      
      this.props.getImages();
    }

  }

  componentWillUnmount () {
  }

  navigateToUrl(url){
    window.open(url);
  }

  render () {

    const { vulnData, loading, severityOptions, id, images } = this.props;

    //TODO remove or use re-select this is inefficient
    const selectedImage = this.props.images.find(image => image.imageDigest === id);

    return (
      <Main>
        <VulnTable selectedImage={ selectedImage } vulnData={ vulnData ||[] } severityOptions={severityOptions} navigateToUrl={this.navigateToUrl}/>
      </Main>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getImageVuln: bindActionCreators(getImageVulnByDigest, dispatch),
    getImages: bindActionCreators(getImages, dispatch)
  }
}

const mapStateToProps = ({ images, ajaxStatus }) => {

  return{
    vulnData: images.vulnData,
    loading: ajaxStatus.loading,
    error: ajaxStatus.error,
    severityOptions: mapVulnGroups(images.vulnData),
    images: mapImages(images.list)
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(VulnPage);