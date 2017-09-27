import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';

const styles = StyleSheet.create({
	gametime: {
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 40,
		textAlign: 'center'
	},
	lets: {
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 20,
		textAlign: 'center'
	},
	save: {
		alignItems: 'flex-end',
		flex: 1,
		height: 40,
		justifyContent: 'center',
		marginVertical: 10
	},
	select: {
		alignItems: 'center',
		backgroundColor: 'rgba(49,218,91,0.4)',
		borderRadius: 5,
		flex: 1,
		flexDirection: 'row',
		height: 40,
		justifyContent: 'space-between'
	},
	sport: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center'
	}
});

class Manage extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name='settings' size={30} />
	};

	componentDidMount() {
	}

	render() {
		return (
			<View style={{ flex: 1, padding: 20 }}>

				{/* Header */}
				<View style={{ flex: 2 }}>
					<View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
						<Image
							source={require('../../../../assets/images/gametime.png')}
							style={{ height: 40, width: 40 }} />
						<Text style={styles.gametime}> Gametime</Text>
					</View>
					<Text style={styles.lets}>Let's select who you follow</Text>
				</View>


				{/* Body */}
				<View style={{ flex: 10 }}>
					{/* Sports */}
					<View style={{ flex: 9 }}>
						{/* Baseball */}
						<TouchableHighlight
							onPress={() => this.props.ftueTeams('baseball')}
							style={{ height: 40, marginVertical: 10 }}
							underlayColor='transparent'>
							<View style={styles.select}>
								<View style={{ flex: 1 }} />
								<View style={{ flex: 2 }} >
									<Text style={styles.sport}>Baseball</Text>
								</View>
								<View style={{ flex: 1 }} />
							</View>
						</TouchableHighlight>
					</View>

					{/* Save */}
					<View style={styles.save}>
						<TouchableHighlight
							onPress={this.props.goBack}
							style={{ backgroundColor: '#31da5b', borderRadius: 5, padding: 10 }}
							underlayColor='#31da5b'>
							<Text style={styles.sport}>Save</Text>
						</TouchableHighlight>
					</View>

				</View>
			</View >
		);
	}
}

const mapStateToProps = state => ({
	sports: state.sports
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Manage);