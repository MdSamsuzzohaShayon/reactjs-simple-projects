import React, { Component } from 'react';
import propTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export class ImageResults extends Component {
    state = {
        open: false,
        currentImg: ''
    }

    //THIS IS FOR ZOOM BUTTON
    handleOpen = (img) => {
        this.setState({ open: true, currentImg: img })
    }
    // IT WILL CLOSE AFTER ZOOM
    handleClose = () => {
        this.setState({ open: false })
    }


    //RENDER FUNCTION
    render() {
        let imageListContent;
        const { images } = this.props;  //AS SAME AS (IMAGES = THIS.PROPS.IMGES)
        if (images) {
            imageListContent = (
                <GridList cols={3}>
                    {/* //MAP FUNCTION IS FOR LOOPING ALL IMAGES */}
                    {images.map(img => (
                        // IMG MEANS THIS.PROPS.IMAGES
                        <GridTile title={img.tags} key={img.id} subtitle={
                            <span>
                                by <strong>{img.user}</strong>
                            </span>
                        }
                            actionIcon={
                                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                    <ZoomIn color="white" />
                                </IconButton>
                            }>
                            <img src={img.largeImageURL} alt="Image" />
                        </GridTile>
                    ))}
                </GridList>
            );
        } else {
            imageListContent = null;
        }
        const actions = [
            <FlatButton label="close" primary={true} onClick={this.handleClose} />
        ]



        return (
            <div>
                {imageListContent}
                {/* WHEN WE ZOOM THE IMAGE THIS DIALOG WILL OPEN WITH IMAGE */}
                {/* CLOSE BUTTON WILL CLOSE THE DIALOG */}
                <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} >
                    <img src={this.state.currentImg} alt="Image" style={{ width: '100%' }} />
                </Dialog>
            </div>
        );
    }
}








ImageResults.propTypes = {
    image: propTypes.array.isRequired
}

export default ImageResults;
