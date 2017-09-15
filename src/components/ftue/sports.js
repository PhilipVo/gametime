import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import { connect } from 'react-redux';

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
	next: {
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

class Sports extends Component {
	componentDidMount() {
	}

	render() {
		return (
			<View style={{ flex: 1, padding: 20 }}>

				{/* Header */}
				<View style={{ flex: 2 }}>
					<View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
						<Image
							source={require('../../../assets/images/gametime.png')}
							style={{ height: 40, width: 40 }} />
						<Text style={styles.gametime}> Gametime</Text>
					</View>
					<Text style={styles.lets}>Let's select the sports you follow</Text>
				</View>

				{/* Body */}
				<View style={{ flex: 10 }}>
					{/* Baseball */}
					<TouchableHighlight
						onPress={() => this.props.ftueTeams('baseball')}
						style={{ flex: 1, marginVertical: 10 }}
						underlayColor='transparent'>
						<View style={styles.select}>
							<View style={{ flex: 1 }} />
							<View style={{ flex: 2 }} >
								<Text style={styles.sport}>Baseball</Text>
							</View>
							<View style={{ flex: 1 }} />
						</View>
					</TouchableHighlight>

					{/* Basketball */}
					<TouchableHighlight
						onPress={() => this.props.ftueTeams('basketball')}
						style={{ flex: 1, marginVertical: 10 }}
						underlayColor='transparent'>
						<View style={styles.select}>
							<View style={{ flex: 1 }} />
							<View style={{ flex: 2 }} >
								<Text style={styles.sport}>Basketball</Text>
							</View>
							<View style={{ flex: 1 }} />
						</View>
					</TouchableHighlight>

					{/* Football */}
					<TouchableHighlight
						onPress={() => this.props.ftueTeams('football')}
						style={{ flex: 1, marginVertical: 10 }}
						underlayColor='transparent'>
						<View style={styles.select}>
							<View style={{ flex: 1 }} />
							<View style={{ flex: 2 }} >
								<Text style={styles.sport}>Football</Text>
							</View>
							<View style={{ flex: 1 }} />
						</View>
					</TouchableHighlight>

					{/* Hockey */}
					<TouchableHighlight
						onPress={() => this.props.ftueTeams('hockey')}
						style={{ flex: 1, marginVertical: 10 }}
						underlayColor='transparent'>
						<View style={styles.select}>
							<View style={{ flex: 1 }} />
							<View style={{ flex: 2 }} >
								<Text style={styles.sport}>Hockey</Text>
							</View>
							<View style={{ flex: 1 }} />
						</View>
					</TouchableHighlight>

					{/* MMA */}
					<TouchableHighlight
						onPress={() => this.props.ftueTeams('mma')}
						style={{ flex: 1, marginVertical: 10 }}
						underlayColor='transparent'>
						<View style={styles.select}>
							<View style={{ flex: 1 }} />
							<View style={{ flex: 2 }} >
								<Text style={styles.sport}>MMA</Text>
							</View>
							<View style={{ flex: 1 }} />
						</View>
					</TouchableHighlight>

					{/* Soccer */}
					<TouchableHighlight
						onPress={() => this.props.ftueTeams('soccer')}
						style={{ flex: 1, marginVertical: 10 }}
						underlayColor='transparent'>
						<View style={styles.select}>
							<View style={{ flex: 1 }} />
							<View style={{ flex: 2 }} >
								<Text style={styles.sport}>Soccer</Text>
							</View>
							<View style={{ flex: 1 }} />
						</View>
					</TouchableHighlight>

					{/* Next */}
					<View style={styles.next}>
						<View style={{ backgroundColor: '#31da5b', borderRadius: 5, padding: 10 }}>
							<Text style={styles.sport}>Finish</Text>
						</View>
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
	ftueTeams: sport => { dispatch({ type: 'FTUE_TEAMS', params: { sport: sport } }); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sports);