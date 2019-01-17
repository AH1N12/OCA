package AH1N1.OCA.model;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@Builder
public class FolderDto {

    private Long id;
    @NotNull
    private String name;
    @NotNull
    private Set<NoteDto> notes;

}
