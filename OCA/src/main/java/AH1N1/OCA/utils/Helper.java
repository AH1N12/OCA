package AH1N1.OCA.utils;

import AH1N1.OCA.repo.entiity.Folder;
import AH1N1.OCA.repo.entiity.Note;

public interface Helper {

    default Boolean folderContainsNote(Folder folder, Note note) {
        return folder.getNotes().stream().anyMatch(n -> note.getId().equals(n.getId()));
    }
}
