import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as yup from 'yup';
import {SubmitHandler, useForm} from 'react-hook-form';
import {LoginRequestType} from '../../features/auth/authTypes';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginTC} from '../../features/auth/authSlice';
import {useAppDispatch} from '../../app/store';
import {addTodoTC} from '../../features/Todolists/todolistsSlice';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalWindow = (props: {open:boolean, isOpened: (open:boolean)=>void}) => {

    const dispatch = useAppDispatch()
    const handleClose = () => {
        props.isOpened(false)
    }

    const schema = yup.object({
        title: yup.string().max(30).required(),
    }).required();

    const {register, handleSubmit, watch, formState: {errors}} = useForm<{ title:string }>({
        resolver: yupResolver(schema),
        mode: 'onTouched'
    });
    const onSubmit: SubmitHandler<{ title: string }> = data => {
        console.log(data);
        dispatch(addTodoTC(data.title))
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input  {...register('title')}/>
                        <input type="submit"/>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalWindow;