import React, { Component } from 'react';
import styles from './styles.module.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Dropdown extends Component {
  state = {
    open: false
  }
  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })

  render() {
    return (
      <div className={styles.dropdownContainer}>
        <div onClick={this.open}>
          {this.props.title} {this.props.custom ? <i className="fa fa-user"></i>: <i style={{fontWeight: 600}} className="icofont-thin-down"></i>}
        </div>
        {this.state.open && <>
          <div className={styles.backdrop} onClick={this.close} />
          <div className={styles.dropdown} style={this.props.isLast && {right:0, width: 120}}>
            {this.props.links.map((ele, index) => (
              <Link to={ele.to} className={styles.link} onClick={this.close} key={index}>{ele.tag}</Link>
            ))}
          </div>
        </>}
      </div>
    )
  }
}
