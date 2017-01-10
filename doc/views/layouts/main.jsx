import React from 'react'
import Header from '../../components/header'
import MobileHeader from '../../components/mobile-header'
import cad from '../../../src/index'
import '../../statics/css/normalize.css'
import '../../statics/css/main.css'
import '../../statics/css/ui.css'
import '../../statics/css/iconfont/iconfont.css'
var Main = React.createClass({
	render(){
		return (
			<div>
				<Header/>
				<MobileHeader />
				<div className="page-main">
					{this.props.children}
				</div>
			</div>
		)
	}
})

module.exports = Main;