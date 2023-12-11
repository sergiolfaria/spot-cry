import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMusicsFromData } from '../../services/Songs/getMusicData';
import Loading from '../Loading/Loading';
import { getPlaylistTracks } from '../../services/Playlists/getPlaylistTracks';
import { EditPlayslist } from '../../services/Playlists/EditPlayslist';
import { COLORS } from '../../constants/colors'; // Adiciona a importação das cores
import { getPlaylistbyId } from '../../services/Playlists/GetPlayListById';
import { Button, CenteredContainer, Form, FormField, FormGroup, FormLabel } from './style';






const EditPlaylistForm = ({ playlistId, onCancel, onUpdate }) => {
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCloseForm = () => {
        setPlaylistName('');
        setPlaylistDescription('');
        onCancel();
    };

    const handleUpdatePlaylist = async () => {
        try {
            if (!playlistName) {
                console.error('O nome da playlist é obrigatório.');
                return;
            }

            setLoading(true);

            await EditPlayslist(playlistId, {
                name: playlistName,
                description: playlistDescription,
            });

            alert('Playlist atualizada com sucesso!');
            onUpdate();
            handleCloseForm();
        } catch (error) {
            console.error('Erro ao atualizar playlist:', error);
            alert('Erro ao atualizar playlist. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const loadPlaylist = async () => {
            try {
                const existingPlaylist = await getPlaylistbyId(playlistId);
                setPlaylistName(existingPlaylist.name);
                setPlaylistDescription(existingPlaylist.description);
            } catch (error) {
                console.error('Error loading existing playlist:', error);
            }
        };

        loadPlaylist();
    }, [playlistId]);

    return (
        <CenteredContainer>
            
                
                    <Form >
                        <FormGroup className="form__group field">
                            <FormField
                                type="text"
                                value={playlistName}
                                onChange={(e) => setPlaylistName(e.target.value)}
                            />
                            <FormLabel htmlFor="title" className="form__label">
                                Atualizar Playlist
                            </FormLabel>
                        </FormGroup>
                        <FormGroup className="form__group field">
                            <FormField
                                type="text"
                                value={playlistDescription}
                                onChange={(e) => setPlaylistDescription(e.target.value)}
                            />
                            <FormLabel htmlFor="artist" className="form__label">
                                Descrição da Playlist
                            </FormLabel>
                        </FormGroup>

                    <Button onClick={handleUpdatePlaylist} disabled={loading}>
                        Atualizar Playlist
                    </Button>
                    <Button onClick={handleCloseForm} disabled={loading}>
                        Cancelar
                    </Button>
                    </Form>

    
           
        </CenteredContainer>
    );
};

export default EditPlaylistForm;

