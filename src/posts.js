import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm,ImageField,  TextField, EditButton, TextInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostList = (props) => (
 
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="tab" />
            <TextField source="customer" />
            <ImageField source="src" />
            <TextField source="comment" />
            <EditButton basePath="/Customers" />
        </Datagrid>
    </List>
    
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.customer}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
             <TextInput source="headline" />
            <TextInput source="tab" />
            <TextInput multiline source="src" />
            <TextInput source="customer" />
            <TextInput source="comment" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Customers"  defaultTitle="Customer Pictures"{...props}>
        <SimpleForm>
            <TextInput source="headline" />
            <TextInput source="tab" />
            <TextInput multiline source="src" />
            <TextInput source="customer" />
            <TextInput source="comment" />
        </SimpleForm>
    </Create>
)