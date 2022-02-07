import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {IEvent} from "../models/IEvent";

const Events:FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const {guests, events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
    }, []);

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event)
    }
    return (
        <div>
            <EventCalendar events={events} />
            <Row justify="center" >
                <Button onClick={() => setModalVisible(true)}>Add Event</Button>
            </Row>
            <Modal
                title="Add Event"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    submit={addNewEvent}
                    guests={guests}
                />
            </Modal>
        </div>
    );
};

export default Events;