import React, { Component } from 'react';
import {
	Dimensions,
	FlatList,
	Image,
	RefreshControl,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';

import http from '../../../services/http.service';
import session from '../../../services/session.service';

const styles = StyleSheet.create({
	account: {
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 20,
		textAlign: 'center'
	},
	back: {
		alignItems: 'center',
		flex: 1,
		height: 40,
		marginVertical: 10
	},
	background: {
		height: Dimensions.get('window').height,
		position: 'absolute',
		width: Dimensions.get('window').width
	},
	gametime: {
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 40,
		textAlign: 'center'
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	sport: {
		color: 'white',
		fontSize: 18,
		paddingVertical: 10
	},
	swipe: {
		borderBottomColor: 'white',
		borderBottomWidth: 0.5,
		marginVertical: 7,
	}
});

class Manage extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name='settings' size={30} />
	};

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			refreshing: false
		};
	}

	componentDidMount() {
		http.get('/api/followings/get-followed-teams')
			.then(data => this.setState({ data: data }))
			.catch(() => { });
	}

	onRefresh = () => {
		if (!this.state.refreshing) {
			this.setState({ refreshing: true });
			http.get('/api/followings/get-followed-teams')
				.then(data => this.setState({ data: data, refreshing: false }))
				.catch(() => { });
		}
	}

	unfollow = (item, index) => {
		http.delete(`/api/followings/${item.sport}/${item.team}`)
			.then(() => {
				const data = this.state.data.slice();
				data.splice(index, 1);
				this.setState({ data: data });
			}).catch(() => { });
	}

	render() {
		return (
			<View style={{ flex: 1, padding: 20 }}>
				<Image
					source={require('../../../../assets/images/background2.png')}
					style={styles.background} />

				{/* Header */}
				<View style={{ flex: 2 }}>
					<View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
						<Image
							source={require('../../../../assets/images/buzzer.png')}
							style={{ height: 40, width: 40 }} />
						<Text style={styles.gametime}> Buzzer</Text>
					</View>
					<Text style={styles.account}>Manage teams</Text>
				</View>

				<View style={{ flex: 10 }}>
					<View style={{ flex: 9 }}>
						<FlatList
							data={this.state.data}
							keyExtractor={(item, index) => `${index}`}
							refreshControl={
								<RefreshControl
									enabled={!this.state.refreshing}
									onRefresh={this.onRefresh}
									refreshing={this.state.refreshing}
									size={RefreshControl.SIZE.SMALL} />
							}
							renderItem={({ item, index }) => (
								<Swipeout
									backgroundColor='transparent'
									right={[{
										component: <Icon style={{ alignSelf: 'center' }} color='white' name='trash' size={30} />,
										onPress: () => this.unfollow(item, index),
										type: 'delete'
									}]}
									style={styles.swipe}>
									<View style={styles.row}>
										<Text style={styles.sport}>{item.team}</Text>
										<FAIcon color='white' name='angle-right' size={30} style={{ marginRight: 20 }} />
									</View>
								</Swipeout>
							)} />
					</View>

					<View style={styles.back}>
						{/* Logout */}
						<TouchableHighlight
							onPress={() => {
								session.logout();
								this.props.logout();
							}}
							style={{ backgroundColor: '#31da5b', borderRadius: 5, padding: 10 }}
							underlayColor='#31da5b'>
							<Text style={{ color: 'white' }}>Logout</Text>
						</TouchableHighlight>
					</View>
				</View>

			</View >
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	logout: () => {
		dispatch({ type: 'SET_MODE', mode: 2 });
		dispatch({ type: 'TABS_FEED' });
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Manage);