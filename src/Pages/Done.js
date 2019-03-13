import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {connect} from 'react-redux'
import {getTaskDataUnfinished} from '../Service/fetchApi/fetchAction'

class Done extends Component {
    
    constructor(props){
        super(props);
        this.state={
            item:false
        }
    }
    
    
    render() {
        let data = this.props.todo.todoData;
        return (
            <View style={styles.className}>
                <View style={styles.titleView}>
                    <Text style={styles.pageTitle}>Finished Tasks</Text>
                </View>
                <FlatList
                    data={data}
                    onRefresh={()=>this.props.getUsersDataUnfinished()}
                    refreshing={this.state.item}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) =>
                        item.isComplete &&
                        <View style={styles.flatListInside}>
                            <View style={styles.titleTaskView}>
                                <Text style={styles.listText}>{item.name}</Text>
                            </View>
                            <View style={styles.statusTaskView}>
                                <Text style={styles.statusTaskText}>Finished</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
        marginTop: 20,
    },
    titleView:{
        marginLeft:30
    },
    flatListInside: {
        marginVertical: 5,
        flex: 1,
        padding: 15,
        borderRadius: 1,
        elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 30,
    },
    listText: {
        color: '#000',
        fontSize: 20
    },
    statusTaskText: {
        color: '#fff',
        fontSize: 15
    },
    titleTaskView: {
        flex: 1,
    },
    statusTaskView: {
        backgroundColor: '#57b993',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        paddingHorizontal: 5
    },
    pageTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#57b993'
    }
});
const mapStateToProps = (state) => ({
    todo: state.getDataReducer,
});

export default connect(mapStateToProps, {getUsersDataUnfinished: getTaskDataUnfinished})(Done);
